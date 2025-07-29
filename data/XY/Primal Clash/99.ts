import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
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
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "False Swipe",
				fr: "Faux-Chage",
				es: "Falsotortazo",
				it: "Falsofinale",
				pt: "Corte Artificial",
				de: "Trugschlag"
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
				fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ait 10 PV.",
				es: "Lanza 1 moneda. Si sale cara, pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS restantes.",
				it: "Lancia una moneta. Se esce testa, metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				pt: "Jogue uma moeda. Se sair cara, coloque contadores de danos no Pokémon Ativo do seu oponente até seu PS restante ser 10.",
				de: "Wirf 1 Münze. Lege bei \"Kopf\" so lang Schadensmarken auf das Aktive Pokémon deines Gegners, bis es noch 10 KP übrig hat."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
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

	thirdParty: {
		cardmarket: 273630
	}
}

export default card
