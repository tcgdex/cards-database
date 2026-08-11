import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [163],
	set: Set,

	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Stand Sentry",
			'fr-fr': "Veilleur au Guet",
			'es-es': "Posición Centinela",
			'it-it': "Sentinella in Posizione",
			'pt-br': "Ficar de Sentinela",
			'de-de': "Wache stehen"
		},

		effect: {
			'en-us': "Basic Energy attached to your Benched Pokémon can't be discarded by an effect of your opponent's Item or Supporter cards.",
			'fr-fr': "Les Énergies de base attachées à vos Pokémon de Banc ne peuvent pas être défaussées par les effets des cartes Objet ou Supporter de votre adversaire.",
			'es-es': "Las Energías Básicas unidas a tus Pokémon en Banca no pueden descartarse por ningún efecto de las cartas de Objeto o de Partidario de tu rival.",
			'it-it': "Nessuna Energia base assegnata ai tuoi Pokémon in panchina può essere scartata per effetto delle carte Strumento o carte Aiuto del tuo avversario.",
			'pt-br': "Energias básicas ligadas aos seus Pokémon no Banco não podem ser descartadas pelos efeitos de cartas de Item ou Apoiador do seu oponente.",
			'de-de': "An die Pokémon auf deiner Bank angelegte Basis-Energien können nicht durch einen Effekt von Item- oder Unterstützerkarten deines Gegners auf deinen Ablagestapel gelegt werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658781,
				tcgplayer: 272355
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658781,
				tcgplayer: 272355
			}
		},
	],
}

export default card
