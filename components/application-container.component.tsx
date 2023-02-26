import {
    AppShell,
    Footer,
    Group,
    Header,
    Text
} from "@mantine/core"

interface ApplicationContainerProps {
    children: React.ReactNode
}

export default function ApplicationContainer({ children }: ApplicationContainerProps) {
    return (
        <AppShell
            styles={{
                main: {
                    // background: '#FFFFFF',
                    width: "100vw",
                    height: "100vh",
                    paddingLeft: '0px',
                }
            }}
            fixed
            footer={
                <Footer height={60} p="md">
                    <Group position="apart" spacing="xl">
                        <Text size="sm">
                            Made with ❤️ using <span style={{ fontWeight: "bolder" }}>Next.js</span>
                        </Text>
                        <Text size="sm">Other Libs: <span style={{ fontWeight: "bolder" }}
                        >Mantine UI, Zustand, Tabler Icons, React Awesome Reveal, Axios</span></Text>
                    </Group>
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <div style={{ display: "flex", alignItems: 'center', height: "100%" }}>
                        <Text size="lg" weight="bolder">Create Next App</Text>
                    </div>
                </Header>
            }

        >
            {children}
        </AppShell>
    )
}