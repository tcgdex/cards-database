import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
		es: "Bastiodon",
		'es-mx': "Bastiodon",
		de: "Bollterus",
		it: "Bastiodon",
		pt: "Bastiodon"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [411],
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Shieldon"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ancient Bulwark",
			fr: "Rempart Antique",
			es: "Bastión Ancestral",
			'es-mx': "Bastión Ancestral",
			de: "Altes Bollwerk",
			it: "Bastione Antico",
			pt: "Baluarte Ancestral"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to each of your Pokémon by attacks from your opponent's Pokémon that have 2 or less Energy attached.",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à chacun de vos Pokémon par les attaques des Pokémon de votre adversaire auxquels 2 Énergies ou moins sont attachées.",
			es: "Mientras este Pokémon esté en tu Banca, se evita todo el daño infligido a cada uno de tus Pokémon por ataques de los Pokémon de tu rival que tengan 2 Energías o menos unidas.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, se evita todo el daño infligido por ataques de los Pokémon de tu rival que tengan 2 Energías o menos unidas a cada uno de tus Pokémon.",
			de: "Solange dieses Pokémon auf deiner Bank ist, verhindere allen Schaden, der jedem deiner Pokémon durch Attacken von Pokémon deines Gegners, an die 2 oder weniger Energien angelegt sind, zugefügt wird.",
			it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a ciascuno dei tuoi Pokémon dagli attacchi dei Pokémon del tuo avversario che hanno due o meno Energie assegnate.",
			pt: "Enquanto este Pokémon estiver no seu Banco, previna todo o dano causado a cada um dos seus Pokémon por ataques dos Pokémon do seu oponente que têm 2 ou menos Energias ligadas a eles."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			'es-mx': "Martillar",
			de: "Einhämmern",
			it: "Martello",
			pt: "Martelada"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 160
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895878,
				tcgplayer: 704850
			}
		},
	],
}

export default card
