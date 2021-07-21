import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Blacephalon",
		fr: "Pierroteknik",
		es: "Blacephalon",
		it: "Blacephalon",
		pt: "Blacephalon",
		de: "Kopplosio"
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		806,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Fireworks Bomb",
				fr: "Bombe Artifice",
				es: "Bomba Pirotécnica",
				it: "Bombe d’Artificio",
				pt: "Bomba Pirotécnica",
				de: "Feuerwerksbombe"
			},
			effect: {
				en: "Put 4 damage counters on your opponent’s Pokémon in any way you like. If your opponent has exactly 3 Prize cards remaining, put 12 damage counters on them instead.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. S’il reste exactement 3 cartes Récompense à votre adversaire, placez 12 marqueurs de dégâts à la place.",
				es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees. Si a tu rival le quedan exactamente 3 cartas de Premio, pon 12 contadores de daño en ellos en vez de 4.",
				it: "Distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario. Se il tuo avversario ha esattamente tre carte Premio rimanenti, invece distribuiscine 12.",
				pt: "Coloque 4 contadores de dano nos Pokémon do seu oponente como desejar. Se o seu oponente tiver exatamente 3 cartas de Prêmio restantes, coloque 12 contadores de dano neles ao invés de 4.",
				de: "Lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners. Wenn dein Gegner genau 3 verbleibende Preiskarten hat, lege stattdessen 12 Schadensmarken auf sie."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
