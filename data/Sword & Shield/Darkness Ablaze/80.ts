import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
		es: "Shiinotic",
		it: "Shiinotic",
		pt: "Shiinotic",
		de: "Lamellux"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Morelull",
		fr: "Spododo"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flickering Light",
				fr: "Lueur Vacillante",
				es: "Luz Titilante",
				it: "Luce Tremula",
				pt: "Luz Tremeluzente",
				de: "Flackerndes Licht"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent’s next turn, the Defending Pokémon can’t attack.",
				fr: "Lancez une pièce. Si c’est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
				es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
				de: "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Fear the Forest",
				fr: "Peur Sylvestre",
				es: "Temor Forestal",
				it: "Bosco Inquietante",
				pt: "Medo da Floresta",
				de: "Waldfurcht"
			},
			effect: {
				en: "If Glimwood Tangle is in play, this attack does 60 more damage.",
				fr: "Si Forêt de Lumirinth est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si Bosque Lumirinto está en juego, este ataque hace 60 puntos de daño más.",
				it: "Se c’è in gioco Bosco Brillabirinto, questo attacco infligge 60 danni in più.",
				pt: "Se Bosque Glimwood estiver em jogo, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn Wirrschein-Wald im Spiel ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
