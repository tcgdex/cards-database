import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		es: "Xatu",
		it: "Xatu",
		pt: "Xatu",
		de: "Xatu"
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
		en: "Natu",
		fr: "Natu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Creepy Wind",
				fr: "Vent Perturbant",
				es: "Viento Escalofriante",
				it: "Ventolosco",
				pt: "Vento Amedrontador",
				de: "Schauriger Wind"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Life Drain",
				fr: "Perte d’Énergie",
				es: "Drenar Vida",
				it: "Assorbivita",
				pt: "Drenar Vida",
				de: "Lebensentzug"
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
				fr: "Lancez une pièce. Si c’est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ait 10 PV.",
				es: "Lanza 1 moneda. Si sale cara, pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS restantes.",
				it: "Lancia una moneta. Se esce testa, metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				pt: "Jogue 1 moeda. Se sair cara, coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
				de: "Wirf 1 Münze. Lege bei Kopf so lang Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP 10 betragen."
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



}

export default card
