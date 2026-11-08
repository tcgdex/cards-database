import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'es-es': "Xatu",
		'it-it': "Xatu",
		'pt-br': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Creepy Wind",
				'fr-fr': "Vent Perturbant",
				'es-es': "Viento Escalofriante",
				'it-it': "Ventolosco",
				'pt-br': "Vento Amedrontador",
				'de-de': "Schauriger Wind"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Life Drain",
				'fr-fr': "Perte d’Énergie",
				'es-es': "Drenar Vida",
				'it-it': "Assorbivita",
				'pt-br': "Drenar Vida",
				'de-de': "Lebensentzug"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
				'fr-fr': "Lancez une pièce. Si c’est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ait 10 PV.",
				'es-es': "Lanza 1 moneda. Si sale cara, pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS restantes.",
				'it-it': "Lancia una moneta. Se esce testa, metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				'pt-br': "Jogue 1 moeda. Se sair cara, coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf so lang Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP 10 betragen."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's said that while this Pokémon has the power to predict the future, it's not powerful enough to change the future it sees.",
	},

	thirdParty: {
		cardmarket: 408039,
		tcgplayer: 201254
	}
}

export default card
