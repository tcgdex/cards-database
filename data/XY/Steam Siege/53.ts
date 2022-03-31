import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swagger",
				fr: "Vantardise",
				es: "Contoneo",
				it: "Bullo",
				pt: "Arrogância",
				de: "Angeberei"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sala cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Spirited Throw",
				fr: "Lancer Plein d'Esprit",
				es: "Lanzamiento Inspirado",
				it: "Lancio Vigoroso",
				pt: "Lançamento Vigoroso",
				de: "Energischer Wurf"
			},
			effect: {
				en: "If, before doing damage, your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 60 more damage.",
				fr: "Si, avant d'infliger des dégâts, il reste plus de PV au Pokémon Actif de votre adversaire qu'à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si, antes de infligir daño, al Pokémon Activo de tu rival le quedan más PS que a este Pokémon, este ataque hace 60 puntos de daño más.",
				it: "Se, prima di infliggere i danni, il Pokémon attivo del tuo avversario ha più PS rimanenti di questo Pokémon, questo attacco infligge 60 danni in più.",
				pt: "Se, antes de causar danos, o Pokémon Ativo do seu oponente tiver mais PS restante do que este Pokémon, este ataque causará 60 de danos adicionais.",
				de: "Wenn, bevor du Schaden zufügst, das Aktive Pokémon deines Gegners mehr verbliebene KP hat als dieses Pokémon, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
