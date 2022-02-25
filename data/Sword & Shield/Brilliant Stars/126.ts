import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus",
		fr: "Boréas",
		es: "Tornadus",
		it: "Tornadus",
		pt: "Tornadus",
		de: "Boreos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sudden Cyclone",
			fr: "Cyclone Surprise",
			es: "Ciclón Súbito",
			it: "Ciclone Improvviso",
			pt: "Ciclone Súbito",
			de: "Plötzlicher Sturm"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench, you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			es: "Cuando juegues este Pokémon de tu mano a tu Banca, puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
			pt: "Ao jogar este Pokémon da sua mão em seu Banco, você poderá fazer com que seu oponente troque o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blasting Wind",
			fr: "Vent Impitoyable",
			es: "Vientos Explosivos",
			it: "Vento Distruttivo",
			pt: "Vendaval Avassalador",
			de: "Peitschender Wind"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card