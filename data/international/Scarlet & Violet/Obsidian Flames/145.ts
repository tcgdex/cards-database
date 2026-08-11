import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		'fr-fr': "Archéodong",
		'en-us': "Bronzong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Archéomire",
		'en-us': "Bronzor",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Pression Oracle",
			'en-us': "Oracle Press",
			'es-es': "Presión Oráculo",
			'it-it': "Pressa Profetica",
			'pt-br': "Compressão do Oráculo",
			'de-de': "Orakelpresse"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			'en-us': "During your opponent's next turn, prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			'es-es': "Durante el próximo turno de tu rival, se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		},

		damage: 20
	}, {
		cost: ["Metal", "Metal"],

		name: {
			'fr-fr': "Extrasenseur",
			'en-us': "Extrasensory",
			'es-es': "Paranormal",
			'it-it': "Extrasenso",
			'pt-br': "Extrassensorial",
			'de-de': "Sondersensor"
		},

		effect: {
			'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If you have the same number of cards in your hand as your opponent, this attack does 90 more damage.",
			'es-es': "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725225,
				tcgplayer: 509929,
				cardtrader: 255830
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725225,
				tcgplayer: 509929,
				cardtrader: 255830
			}
		},
	],

	illustrator: "Nobuhiro Imagawa",

	
}

export default card
