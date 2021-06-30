import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
				es: "Rayo Psi",
				it: "Psico",
				pt: "Raio Psíquico",
				de: "Mentale Blockade"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Resonance",
				fr: "Résonance Psychique",
				es: "Resonancia Psíquica",
				it: "Risonanza Psichica",
				pt: "Ressonância Psíquica",
				de: "Psycho-Resonanz"
			},
			effect: {
				en: "If your opponent has any Psychic Pokémon in play, this attack does 60 more damage.",
				fr: "Si votre adversaire a un Pokémon Psychic en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si tu rival tiene algún Pokémon Psychic en juego, este ataque hace 60 puntos de daño más.",
				it: "Se il tuo avversario ha dei Pokémon Psychic in gioco, questo attacco infligge 60 danni in più.",
				pt: "Se o seu oponente tiver algum Pokémon Psychic em jogo, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn dein Gegner mindestens 1 Psychic-Pokémon im Spiel hat, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

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
	retreat: 3,



}

export default card
