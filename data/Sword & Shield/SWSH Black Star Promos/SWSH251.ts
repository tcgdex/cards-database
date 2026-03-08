import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
    set: Set,

    name: {
        en: "Boss's Orders",
        fr: "Ordres du Boss",
        es: "Órdenes de Jefes",
        it: "Ordini del Capo",
        pt: "Ordens da Chefia",
        de: "Befehl vom Boss"
    },

    rarity: "None",
    category: "Trainer",

    effect: {
        en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
        fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
        es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
        it: "Scambia uno dei Pokémon in panchina del tuo avversario con il suo Pokémon attivo.",
        pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele.",
        de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
    },

    trainerType: "Supporter",
    regulationMark: "F",
    illustrator: "Mitsuhiro Arita",

    variants: {
        normal: false,
        reverse: false,
        holo: true,
        firstEdition: false
    }
}

export default card