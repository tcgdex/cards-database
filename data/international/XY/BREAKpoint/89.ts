import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Raticate BREAK",
		'fr-fr': "Rattatac TURBO",
		'es-es': "Raticate TURBO",
		'it-it': "Raticate TURBO",
		'pt-br': "Raticate TURBO",
		'de-de': "Rattikarl-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'es-es': "Raticate",
		'it-it': "Raticate",
		'pt-br': "Raticate",
		'de-de': "Rattikarl"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Fang",
				'fr-fr': "Croc Fatal",
				'es-es': "Superdiente",
				'it-it': "Superzanna",
				'pt-br': "Superpresa",
				'de-de': "Superzahn"
			},
			effect: {
				'en-us': "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
				'fr-fr': "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ait 10 PV.",
				'es-es': "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS restantes.",
				'it-it': "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				'pt-br': "Coloque contadores de danos no Pokémon Ativo do seu oponente até seu PS restante ser 10.",
				'de-de': "Lege so lang Schadensmarken auf das Aktive Pokémon deines Gegners, bis es noch 10 KP übrig hat."
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 288264,
		tcgplayer: 111567
	}
}

export default card
