import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
		es: "Greninja",
		it: "Greninja",
		pt: "Greninja",
		de: "Quajutsu"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shadow Stitching",
				fr: "Ombre Suture",
				es: "Puntadas Sombrías",
				it: "Cucitura d’Ombra",
				pt: "Costura Sombria",
				de: "Schattensticken"
			},
			effect: {
				en: "Until the end of your opponent’s next turn, each Pokémon your opponent has in play, in his or her hand, and in his or her discard pile has no Abilities. (This includes cards that come into play on that turn.)",
				fr: "Jusqu’à la fin du prochain tour de votre adversaire, chacun des Pokémon de votre adversaire en jeu, dans sa main et dans sa pile de défausse, n’a pas de talent. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
				es: "Hasta el final del próximo turno de tu rival, los Pokémon en juego de tu rival, en su mano y en su pila de descartes no tienen ninguna habilidad. (Esto incluye cartas que entran en juego durante ese turno).",
				it: "Fino alla fine del prossimo turno del tuo avversario, le abilità dei Pokémon in gioco del tuo avversario, nella sua mano o nella sua pila degli scarti non hanno più effetto (incluse quelle delle carte entrate in gioco in quel turno).",
				pt: "Até o final da próxima vez de jogar do seu oponente, todos os Pokémon que o seu oponente tiver em jogo, na mão e na pilha de descarte, não possuem Habilidades. (Isso inclui os cards que entram em jogo naquela rodada).",
				de: "Bis zum Ende des nächsten Zuges deines Gegners hat jedes gegnerische Pokémon im Spiel, auf seiner Hand und in seinem Ablagestapel keine Fähigkeiten. (Dazu gehören Karten, die während des Zuges ins Spiel kommen.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Moonlight Slash",
				fr: "Tranch’Lune",
				es: "Cuchillada Luz Lunar",
				it: "Lame Siderali",
				pt: "Talho de Luar",
				de: "Mondscheinschlitzer"
			},
			effect: {
				en: "You may return a Water Energy from this Pokémon to your hand. If you do, this attack does 20 more damage.",
				fr: "Vous pouvez reprendre une Énergie Water de ce Pokémon dans votre main. Dans ce cas, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Puedes devolver 1 Energía Water de este Pokémon a tu mano. Si lo haces, este ataque hace 20 puntos de daño más.",
				it: "Puoi riprendere in mano un’Energia Water assegnata a questo Pokémon. Se lo fai, questo attacco infligge 20 danni in più.",
				pt: "Você pode retornar uma Energia Water deste Pokémon para a sua mão. Se fizer isso, este ataque causará 20 de danos adicionais.",
				de: "Du kannst 1 Water-Energie von diesem Pokémon zurück auf deine Hand nehmen. Wenn du das machst, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
