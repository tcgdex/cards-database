import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Kartana",
		fr: "Katagami",
		es: "Kartana",
		it: "Kartana",
		pt: "Kartana",
		de: "Katagami"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		798,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Big Cut",
				fr: "Grosse Coupure",
				es: "Gran Corte",
				it: "Grantaglio",
				pt: "Corte Imenso",
				de: "Tiefer Schnitt"
			},
			effect: {
				en: "If you have exactly 4 Prize cards remaining, this attack does 120 more damage.",
				fr: "S’il vous reste exactement 4 cartes Récompense, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si te quedan exactamente 4 cartas de Premio, este ataque hace 120 puntos de daño más.",
				it: "Se hai esattamente quattro carte Premio rimanenti, questo attacco infligge 120 danni in più.",
				pt: "Se você tiver exatamente 4 cartas de Prêmio restantes, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn du genau 4 verbleibende Preiskarten hast, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
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
				en: "Flip a coin. If heads, put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
				fr: "Lancez une pièce. Si c’est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu’à ce qu’il ait 10 PV.",
				es: "Lanza 1 moneda. Si sale cara, pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS.",
				it: "Lancia una moneta. Se esce testa, metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
				pt: "Jogue 1 moeda. Se sair cara, coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
				de: "Wirf 1 Münze. Lege bei Kopf so lang Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP 10 betragen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
