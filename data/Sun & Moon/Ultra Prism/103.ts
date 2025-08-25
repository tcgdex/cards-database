import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		es: "Lickilicky",
		it: "Lickilicky",
		pt: "Lickilicky",
		de: "Schlurplek"
	},

	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		463,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dangerous Lick",
				fr: "Lécher Dangereux",
				es: "Lametazo Peligroso",
				it: "Leccata Pericolosa",
				pt: "Lambida Perigosa",
				de: "Gefährlicher Schlecker"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 more damage for each heads. If the first flip is tails, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face. Si le premier lancer est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara. Si sale cruz en el primer lanzamiento, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni in più ogni volta che esce testa. Se la prima volta esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 50 pontos de dano a mais para cada cara. Se a primeira jogada sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu. Wenn das Ergebnis des ersten Münzwurfs Zahl ist, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: "50+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-Boulé",
				es: "Placaje Giro",
				it: "Rollazione",
				pt: "Golpe de Colisão Rolante",
				de: "Rolltackle"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 316029,
		tcgplayer: 157720
	}
}

export default card
