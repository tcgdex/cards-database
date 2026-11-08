import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [497],
	set: Set,

	name: {
		'en-us': "Serperior ex",
		'fr-fr': "Majaspic-ex",
		'de-de': "Serpiroyal-ex",
		'it-it': "Serperior-ex",
		'pt-br': "Serperior ex",
		'es-es': "Serperior ex",
		'es-mx': "Serperior ex"
	},

	suffix: "ex",
	illustrator: "PLANETA Igarashi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
		'de-de': "Efoserp",
		'it-it': "Servine",
		'pt-br': "Servine",
		'es-es': "Servine",
		'es-mx': "Servine"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Regal Cheer",
			'fr-fr': "Encouragement Majestueux",
			'de-de': "Hoheitlicher Beifall",
			'it-it': "Tifo Regale",
			'pt-br': "Torcida Real",
			'es-es': "Ovación Realeza",
			'es-mx': "Canto de Realeza"
		},

		effect: {
			'en-us': "Attacks used by your Pokémon do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par vos Pokémon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Die von deinen Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Gli attacchi usati dai tuoi Pokémon infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques usados pelos seus Pokémon causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-es': "Los ataques usados por tus Pokémon hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques usados por tus Pokémon hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Command the Grass",
			'fr-fr': "Gouvernance Plante",
			'de-de': "Gebieter der Pflanzen",
			'it-it': "Dominio dell'Erba",
			'pt-br': "Comandar a Grama",
			'es-es': "Mandato Planta",
			'es-mx': "Mandato Frondoso"
		},

		effect: {
			'en-us': "You may search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck jusqu'à 3 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'de-de': "Du kannst dein Deck nach bis zu 3 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck.",
			'it-it': "Puoi cercare nel tuo mazzo fino a tre carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Você pode procurar por até 3 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-es': "Puedes buscar en tu baraja hasta 3 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo hasta 3 cartas y ponerlas en tu mano. Después, baraja las cartas de tu mazo."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 835908,
				tcgplayer: 642452
			}
		}
	]
}

export default card
