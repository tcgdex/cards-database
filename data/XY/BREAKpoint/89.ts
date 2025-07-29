import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Raticate BREAK",
		fr: "Rattatac TURBO",
		es: "Raticate TURBO",
		it: "Raticate TURBO",
		pt: "Raticate TURBO",
		de: "Rattikarl-TURBO"
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
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		it: "Raticate",
		pt: "Raticate",
		de: "Rattikarl"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Fang",
				fr: "Croc Fatal",
				es: "Superdiente",
				it: "Superzanna",
				pt: "Superpresa",
				de: "Superzahn"
			},
			effect: {
				en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
				fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ait 10 PV.",
				es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS restantes.",
				it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				pt: "Coloque contadores de danos no Pokémon Ativo do seu oponente até seu PS restante ser 10.",
				de: "Lege so lang Schadensmarken auf das Aktive Pokémon deines Gegners, bis es noch 10 KP übrig hat."
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 288264
	}
}

export default card
