import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		657,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Afterimage Strike",
				fr: "Frap’Invisible",
				es: "Golpe de Recuerdo",
				it: "Colpo Alterimmagine",
				pt: "Ataque Fantasma",
				de: "Nachbild-Angriff"
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks during your opponent’s next turn, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c’est face, évitez ces dégâts.",
				es: "Si se inflige cualquier daño a este Pokémon por ataques durante el próximo turno de tu rival, lanza 1 moneda. Si sale cara, evita ese daño.",
				it: "Se questo Pokémon subisce danni da qualsiasi attacco durante il prossimo turno del tuo avversario, lancia una moneta. Se esce testa, previeni quei danni.",
				pt: "Se qualquer dano for causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente, jogue 1 moeda. Se sair cara, prevenirá aquele dano.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere jenen Schaden bei Kopf."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372343
	}
}

export default card
