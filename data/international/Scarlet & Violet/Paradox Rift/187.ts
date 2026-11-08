import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [994],
	set: Set,

	name: {
		'en-us': "Iron Moth",
		'fr-fr': "Mite-de-Fer",
		'es-es': "Ferropolilla",
		'it-it': "Falenaferrea",
		'pt-br': "Mariposa Férrea",
		'de-de': "Eisenfalter"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thermal Reactor",
			'fr-fr': "Réacteur Thermique",
			'es-es': "Reactor Térmico",
			'it-it': "Termoreattore",
			'pt-br': "Reator Térmico",
			'de-de': "Thermo-Reaktor"
		},

		effect: {
			'en-us': "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may move any amount of {R} Energy from your other Pokémon to it.",
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez déplacer autant d'Énergies {R} que vous le voulez de vos autres Pokémon vers celui-ci.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes mover cualquier cantidad de Energías {R} de tus otros Pokémon a este Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi spostare un numero qualsiasi di Energie {R} dai tuoi altri Pokémon su questo Pokémon.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mover qualquer quantidade de Energia {R} dos seus outros Pokémon para este Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du beliebig viele {R}-Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Ray",
			'fr-fr': "Rayon de Chaleur",
			'es-es': "Rayo Calorífico",
			'it-it': "Calorraggio",
			'pt-br': "Raio Ardente",
			'de-de': "Hitzestrahl"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Heat Ray.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Rayon de Chaleur.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Rayo Calorífico.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Calorraggio.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Raio Ardente.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Hitzestrahl nicht einsetzen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "No records exist of this species being caught. Data is lacking, but the Pokémon's traits match up with an object described in an old book.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740730,
				tcgplayer: 523868,
				cardtrader: 265590
			}
		},
	],

	illustrator: "Takeshi Nakamura",

	
}

export default card
