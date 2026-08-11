import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Combat au Lait",
		'en-us': "Fighting Au Lait",
		'es-es': "Batido Combate",
		'it-it': "Latte di Lotta",
		'pt-br': "Leite da Luta",
		'de-de': "Kampf au Lait"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Vous ne pouvez utiliser cette carte que s'il vous reste plus de cartes Récompense qu'à votre adversaire.\nSoignez 60 dégâts de l'un de vos Pokémon.",
		'en-us': "You can use this card only if you have more Prize cards remaining than your opponent.\n\nHeal 60 damage from 1 of your Pokémon.",
		'es-es': "Puedes usar esta carta solo si te quedan más cartas de Premio que a tu rival.\nCura 60 puntos de daño a uno de tus Pokémon.",
		'it-it': "Puoi usare questa carta solo se hai più carte Premio rimanenti del tuo avversario.\nCura uno dei tuoi Pokémon da 60 danni.",
		'pt-br': "Você só pode usar esta carta se tiver mais cartas de Prêmio restantes do que seu oponente.\nCure 60 pontos de dano de 1 dos seus Pokémon.",
		'de-de': "Du kannst diese Karte nur einsetzen, wenn du mehr verbleibende Preiskarten hast als dein Gegner.\nHeile 60 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715656,
				tcgplayer: 497553,
				cardtrader: 248830
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715656,
				tcgplayer: 497553,
				cardtrader: 248830
			}
		},
	],

	illustrator: "Ayaka Yoshida",

	
}

export default card
