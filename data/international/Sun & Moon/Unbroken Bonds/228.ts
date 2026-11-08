import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Celesteela GX",
		'fr-fr': "Bamboiselle GX",
		'es-es': "Celesteela GX",
		'it-it': "Celesteela GX",
		'pt-br': "Celesteela GX",
		'de-de': "Kaguron GX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		797,
	],

	hp: 200,

	types: [
		"Colorless",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Force Canceler",
				'fr-fr': "Annule Force",
				'es-es': "Cancelador de Fuerzas",
				'it-it': "Annientaforza",
				'pt-br': "Cancelador de Força",
				'de-de': "Machtabwehr"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent’s GX attacks, including damage, done to your Pokémon.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques GX de votre adversaire, y compris les dégâts, infligés à vos Pokémon.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, evita todos los efectos de los ataques GX de tu rival, incluido el daño, infligidos a tus Pokémon.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, previeni tutti gli effetti degli attacchi GX del tuo avversario, inclusi i danni, inflitti ai tuoi Pokémon.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, prevenirá todos os efeitos dos ataques GX do seu oponente, incluindo dano, causados aos seus Pokémon.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere alle Effekte von GX-Attacken deines Gegners, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Cyclone",
				'fr-fr': "Cyclone d’Énergie",
				'es-es': "Ciclón Poderoso",
				'it-it': "Ciclone Potente",
				'pt-br': "Ciclone Poderoso",
				'de-de': "Kraftwirbel"
			},
			effect: {
				'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
				'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 110,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Discovery GX",
				'fr-fr': "Découverte GX",
				'es-es': "Descubrimiento GX",
				'it-it': "Scoperta GX",
				'pt-br': "Descoberta GX",
				'de-de': "Aufdeckung GX"
			},
			effect: {
				'en-us': "Count your Prize cards and put them into your hand. Then, take that many cards from the top of your deck and put them face down as your Prize cards. If you don’t have that many cards in your deck, this attack does nothing. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Comptez vos cartes Récompense, puis ajoutez-les à votre main. Prenez alors ce nombre de cartes du dessus de votre deck et placez-les faces cachées comme cartes Récompense. Si vous n’avez pas assez de cartes dans votre deck, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Cuenta tus cartas de Premio y ponlas en tu mano. Después, coge la misma cantidad de cartas de la parte superior de tu baraja y ponlas boca abajo como tus cartas de Premio. Si no tienes esa cantidad de cartas en tu baraja, este ataque no hace nada. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Conta le tue carte Premio e aggiungile alle carte che hai in mano. Poi prendi lo stesso numero di carte in cima al tuo mazzo e mettile a faccia in giù come carte Premio. Se non hai lo stesso numero di carte nel tuo mazzo, questo attacco non ha effetto. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Conte as suas cartas de Prêmio e coloque-as na sua mão. Em seguida, pegue aquele mesmo número de cartas de cima do seu baralho e coloque-as viradas para baixo como as suas cartas de Prêmio. Se você não tiver aquele mesmo número de cartas no seu baralho, este ataque não fará nada (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Zähle deine Preiskarten und nimm sie auf deine Hand. Nimm anschließend genauso viele Karten von deinem Deck und lege sie als deine verdeckten Preiskarten ab. Wenn du weniger Karten in deinem Deck hast, hat diese Attacke keine Auswirkungen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 372728,
		tcgplayer: 189323
	}
}

export default card
