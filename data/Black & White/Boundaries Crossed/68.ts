import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Munna",
		fr: "Munna",
		es: "Munna",
		it: "Munna",
		pt: "Munna",
		de: "Somniam"
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		517,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Long-Distance Hypnosis",
				fr: "Téléhypnose",
				es: "Telehipnosis",
				it: "Ipnosi a Lunga Distanza",
				pt: "Hipnose a Longa Distância",
				de: "Fernhypnose"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent’s Active Pokémon is now Asleep. If tails, your Active Pokémon is now Asleep.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c’est pile, votre Pokémon Actif est maintenant Endormi.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si sale cruz, tu Pokémon Activo pasa a estar Dormido.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se esce croce, viene addormentato il tuo Pokémon attivo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode jogar uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido. Se sair coroa, o seu Pokémon Ativo ficará Adormecido.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei „Kopf“ schläft das Aktive Pokémon deines Gegners jetzt. Bei „Zahl“ schläft dein Aktives Pokémon jetzt."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
