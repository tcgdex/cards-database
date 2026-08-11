import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Mallow & Lana",
		'fr-fr': "Barbara et Néphie",
		'es-es': "Lulú y Nereida",
		'it-it': "Ibis e Suiren",
		'pt-br': "Lulú e Vitória",
		'de-de': "Maho & Tracy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc. \n\nLorsque vous jouez cette carte, vous pouvez défausser 2 autres cartes de votre main. Dans ce cas, soignez 120 dégâts au Pokémon que vous avez déplacé vers votre Banc.",
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon. \n\nWhen you play this card, you may discard 2 other cards from your hand. If you do, heal 120 damage from the Pokémon you moved to your Bench.",
		'es-es': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca.\n\nCuando juegues esta carta, puedes descartar otras 2 cartas de tu mano. Si lo haces, cura 120 puntos de daño al Pokémon que has movido a tu Banca.",
		'it-it': "Scambia il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.\n\nQuando giochi questa carta, puoi scartare altre due carte che hai in mano. Se lo fai, cura il Pokémon che hai spostato in panchina da 120 danni.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.\n\nQuando você joga esta carta, você pode descartar outras 2 cartas da sua mão. Se fizer isto, cure 120 pontos de dano do Pokémon que você moveu para o seu Banco.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus.\n\nWenn du diese Karte spielst, kannst du 2 andere Karten aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, heile 120 Schadenspunkte bei dem Pokémon, das du auf deine Bank verschoben hast."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 398574,
		tcgplayer: 201319
	}
}

export default card
