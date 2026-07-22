import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
		es: "Bastiodon",
		it: "Bastiodon",
		pt: "Bastiodon",
		de: "Bollterus"
	},

	illustrator: "Minahamu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	stage: "Stage2",
	dexId: [411],

	evolveFrom: {
		en: "Shieldon",
		fr: "Dinoclier",
		es: "Shieldon",
		it: "Shieldon",
		pt: "Shieldon",
		de: "Schilterus"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Ancient Bulwark",
			fr: "Rempart Antique",
			es: "Bastión Ancestral",
			de: "Altes Bollwerk",
			it: "Bastione Antico",
			pt: "Baluarte Ancestral"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to each of your Pokémon by attacks from your opponent's Pokémon that have 2 or less Energy attached.",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à chacun de vos Pokémon par les attaques des Pokémon de votre adversaire auxquels 2 Energies ou moins sont attachées.",
			es: "Mientras este Pokémon esté en tu Banca, se evita todo el daño infligido a cada uno de tus Pokémon por ataques de los Pokémon de tu rival que tengan 2 Energías o menos unidas.",
			de: "Solange dieses Pokémon auf deiner Bank ist, verhindere allen Schaden, der jedem deiner Pokémon durch Attacken von Pokémon deines Gegners, an die 2 oder weniger Energien angelegt sind, zugefügt wird.",
			it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a ciascuno dei tuoi Pokémon dagli attacchi dei Pokémon del tuo avversario che hanno due o meno Energie assegnate.",
			pt: "Enquanto este Pokémon estiver no seu Banco, previna todo o dano causado a cada um dos seus Pokémon por ataques dos Pokémon do seu oponente que têm 2 ou menos Energias ligadas a eles."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894264,
				tcgplayer: 706133

			}
		},
	],
}

export default card
