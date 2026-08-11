import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [1000],
	set: Set,

	name: {
		'en-us': "Gholdengo",
		'fr-fr': "Gromago",
		'es-es': "Gholdengo",
		'it-it': "Gholdengo",
		'pt-br': "Gholdengo",
		'de-de': "Monetigo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Gimmighoul",
		'fr-fr': "Mordudor",
		'es-es': "Gimmighoul",
		'it-it': "Gimmighoul",
		'pt-br': "Gimmighoul",
		'de-de': "Gierspenst"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Lavish Hospitality",
			'fr-fr': "Hospitalité Prodigue",
			'es-es': "Hospitalidad Fastuosa",
			'it-it': "Ospitalità Sfarzosa",
			'pt-br': "Hospitalidade Luxuosa",
			'de-de': "Großzügige Gastfreundschaft"
		},

		effect: {
			'en-us': "You may attach any number of Basic {M} Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Vous pouvez attacher le nombre voulu de cartes Énergie {M} de base de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Puedes unir cualquier cantidad de cartas de Energía {M} Básica de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Puoi assegnare ai tuoi Pokémon un numero qualsiasi di carte Energia base {M} dalla tua mano nel modo che preferisci.",
			'pt-br': "Você pode ligar qualquer número de cartas de Energia {M} Básica da sua mão aos seus Pokémon como desejar.",
			'de-de': "Du kannst beliebig viele Basis-{M}-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Scintillating Surfing",
			'fr-fr': "Surf Scintillant",
			'es-es': "Surfeo Resplandeciente",
			'it-it': "Surf Scintillante",
			'pt-br': "Surfe Extravagante",
			'de-de': "Sensationelles Surfen"
		},

		effect: {
			'en-us': "Flip a coin for each {M} Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie {M} attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía {M} unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Energia {M} assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Energia {M} ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
			'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte {M}-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751605,
				tcgplayer: 534429,
				cardtrader: 274251
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751605,
				tcgplayer: 534429,
				cardtrader: 274251
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

	description: {
		'en-us': "Its body seems to be made up of 1,000 coins. This Pokémon gets along well with others and is quick to make friends with anybody.",
	},

}

export default card
