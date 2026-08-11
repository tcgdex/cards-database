import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		680,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "False Swipe",
				'fr-fr': "Faux-Chage",
				'es-es': "Falsotortazo",
				'it-it': "Falsofinale",
				'pt-br': "Corte Artificial",
				'de-de': "Trugschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ait 10 PV.",
				'es-es': "Lanza 1 moneda. Si sale cara, pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS restantes.",
				'it-it': "Lancia una moneta. Se esce testa, metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				'pt-br': "Jogue uma moeda. Se sair cara, coloque contadores de danos no Pokémon Ativo do seu oponente até seu PS restante ser 10.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" so lang Schadensmarken auf das Aktive Pokémon deines Gegners, bis es noch 10 KP übrig hat."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.",
	},

	thirdParty: {
		cardmarket: 273630,
		tcgplayer: 95997
	}
}

export default card
