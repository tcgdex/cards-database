import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [478],
	set: Set,

	name: {
		'en-us': "Froslass",
		'fr-fr': "Momartik",
		'es-es': "Froslass",
		'it-it': "Froslass",
		'pt-br': "Froslass",
		'de-de': "Frosdedje"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Freezing Shroud",
			'fr-fr': "Voile Glaçant",
			'es-es': "Manto Helador",
			'it-it': "Manto Glaciale",
			'pt-br': "Manto Congelante",
			'de-de': "Frosthülle"
		},

		effect: {
			'en-us': "During Pokémon Checkup, put 1 damage counter on each Pokémon that has an Ability (both yours and your opponent's), except any Froslass.",
			'fr-fr': "Pendant le Contrôle Pokémon, placez un marqueur de dégâts sur chacun des Pokémon ayant un talent (les vôtres et ceux de votre adversaire), à l'exception de Momartik.",
			'es-es': "Durante el Chequeo Pokémon, pon 1 contador de daño en cada Pokémon que tenga una habilidad (tanto tuyos como de tu rival), excepto en los Froslass.",
			'it-it': "Durante il controllo Pokémon, metti un segnalino danno su ciascun Pokémon che ha un'abilità, sia tuo che del tuo avversario, a eccezione di qualsiasi Froslass.",
			'pt-br': "Durante o Checape Pokémon, coloque 1 contador de dano em cada Pokémon que tem uma Habilidade (seus e do seu oponente), exceto por quaisquer Froslass.",
			'de-de': "Lege beim Pokémon-Check 1 Schadensmarke auf jedes Pokémon (deine und die deines Gegners), das eine Fähigkeit hat, außer Frosdedje."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada",
			'de-de': "Frostschlag"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "mingo",
	description: {
		'en-us': "It freezes prey by blowing its −58 degree Fahrenheit breath. It is said to then secretly display its prey.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 769415,
				tcgplayer: 551691
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 769416,
				tcgplayer: 563317
			},
		}
	],
}

export default card
