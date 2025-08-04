import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Samurott V",
		fr: "Clamiral de Hisui V",
		es: "Samurott de Hisui V",
		it: "Samurott di Hisui V",
		pt: "Samurott de Hisui V",
		de: "Hisui-Admurai V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Basket Crash",
			fr: "Panier Percé",
			es: "Cesta al Suelo",
			it: "Cestoschianto",
			pt: "Virar o Cesto",
			de: "Kippender Korb"
		},

		effect: {
			en: "Discard up to 2 Pokémon Tools from your opponent's Pokémon.",
			fr: "Défaussez jusqu'à 2 Outils Pokémon des Pokémon de votre adversaire.",
			es: "Descarta hasta 2 Herramientas Pokémon de los Pokémon de tu rival.",
			it: "Scarta fino a due carte Oggetto Pokémon dai Pokémon del tuo avversario.",
			pt: "Descarte até 2 Ferramentas Pokémon dos Pokémon do seu oponente.",
			de: "Lege bis zu 2 Pokémon-Ausrüstungen von Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Shadow Slash",
			fr: "Tranche Ombre",
			es: "Tajo Sombrío",
			it: "Lacerombra",
			pt: "Talho das Sombras",
			de: "Schattenschlitzer"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658758,
		tcgplayer: 272302
	}
}

export default card
