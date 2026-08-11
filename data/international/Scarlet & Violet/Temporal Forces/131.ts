import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [301],
	set: Set,

	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'it-it': "Delcatty",
		'pt-br': "Delcatty",
		'de-de': "Enekoro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Trickery",
			'fr-fr': "Queue Étourdissante",
			'es-es': "Cola Engaño",
			'it-it': "Confondicoda",
			'pt-br': "Truques de Cauda",
			'de-de': "Schweiftrick"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Energy Blender",
			'fr-fr': "Mélangeur d'Énergies",
			'es-es': "Batidora Energética",
			'it-it': "Miscelenergia",
			'pt-br': "Mistureba de Energia",
			'de-de': "Energiemix"
		},

		effect: {
			'en-us': "You may move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
			'fr-fr': "Vous pouvez déplacer autant d'Énergies que vous le voulez de vos Pokémon vers vos autres Pokémon, comme il vous plaît.",
			'es-es': "Puedes mover cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.",
			'it-it': "Puoi spostare un numero qualsiasi di Energie dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			'pt-br': "Você pode mover qualquer quantidade de Energia dos seus Pokémon para outros Pokémon seus como desejar.",
			'de-de': "Du kannst beliebig viele Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It dislikes dirty places. It often searches for a comfortable place in which to groom itself.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760761,
				tcgplayer: 542875
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760761,
				tcgplayer: 542875
			}
		},
	],

	illustrator: "Keisin",

}

export default card