import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		pt: "Oricorio",
		de: "Choreogel"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supernatural Dance",
				fr: "Danse Surnaturelle",
				es: "Danza Sobrenatural",
				it: "Danza Soprannaturale",
				pt: "Dança Sobrenatural",
				de: "Übernatürlicher Tanz"
			},
			effect: {
				en: "For each Pokémon in your opponent’s discard pile, put 1 damage counter on your opponent’s Pokémon in any way you like.",
				fr: "Pour chaque Pokémon dans la pile de défausse de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
				es: "Por cada Pokémon en la pila de descartes de tu rival, pon 1 contador de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Per ogni Pokémon nella pila degli scarti del tuo avversario, metti un segnalino danno a piacimento sui suoi Pokémon.",
				pt: "Para cada Pokémon na pilha de descarte do seu oponente, coloque 1 contador de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege für jedes Pokémon im Ablagestapel deines Gegners 1 Schadensmarke beliebig auf die Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Revelation Dance",
				fr: "Danse Éveil",
				es: "Danza Despertar",
				it: "Mutadanza",
				pt: "Dança Reveladora",
				de: "Wecktanz"
			},
			effect: {
				en: "If there is no Stadium card in play, this attack does nothing.",
				fr: "S’il n’y a pas de carte Stade en jeu, cette attaque ne fait rien.",
				es: "Si no hay ninguna carta de Estadio en juego, este ataque no hace nada.",
				it: "Se non c’è in gioco alcuna carta Stadio, questo attacco non ha effetto.",
				pt: "Se não houver nenhuma carta de Estádio em jogo, este ataque não fará nada.",
				de: "Wenn keine Stadionkarte im Spiel ist, hat diese Attacke keine Auswirkungen."
			},
			damage: 30,

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
	retreat: 1,



}

export default card
