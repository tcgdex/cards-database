import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Clamiral de Hisui V",
		de: "Hisui-Admurai V",
		es: "Samurott de Hisui V",
		pt: "Samurott de Hisui V",
		it: "Samurott di Hisui V",
		en: "Hisuian Samurott V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Panier Percé",
			de: "Kippender Korb",
			es: "Cesta al Suelo",
			pt: "Virar o Cesto",
			it: "Cestoschianto",
			en: "Basket Crash"
		},

		effect: {
			fr: "Défaussez jusqu'à 2 Outils Pokémon des Pokémon de votre adversaire.",
			de: "Lege bis zu 2 Pokémon-Ausrüstungen von Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta hasta 2 Herramientas Pokémon de los Pokémon de tu rival.",
			pt: "Descarte até 2 Ferramentas Pokémon dos Pokémon do seu oponente.",
			it: "Scarta fino a due carte Oggetto Pokémon dai Pokémon del tuo avversario.",
			en: "Discard up to 2 Pokémon Tools from your opponent's Pokémon."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			fr: "Tranche Ombre",
			de: "Schattenschlitzer",
			es: "Tajo Sombrío",
			pt: "Talho das Sombras",
			it: "Lacerombra",
			en: "Shadow Slash"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			en: "Discard an Energy from this Pokémon."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card