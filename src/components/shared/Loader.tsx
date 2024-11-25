import FadeLoader from "react-spinners/FadeLoader"

export const Loader = ({ loading }: Props) => {

    const override = {
        display: 'block',
        margin: '100px auto'
    }

    return (
        <FadeLoader
            color="#4338ca"
            loading={loading}
            cssOverride={override}
        />
    )
}

type Props = {
    loading: boolean
}