import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Celesteela GX",
		fr: "Bamboiselle GX",
		es: "Celesteela GX",
		it: "Celesteela GX",
		pt: "Celesteela GX",
		de: "Kaguron GX"
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
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
				en: "Force Canceler",
				fr: "Annule Force",
				es: "Cancelador de Fuerzas",
				it: "Annientaforza",
				pt: "Cancelador de Força",
				de: "Machtabwehr"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent’s GX attacks, including damage, done to your Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques GX de votre adversaire, y compris les dégâts, infligés à vos Pokémon.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, evita todos los efectos de los ataques GX de tu rival, incluido el daño, infligidos a tus Pokémon.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, previeni tutti gli effetti degli attacchi GX del tuo avversario, inclusi i danni, inflitti ai tuoi Pokémon.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, prevenirá todos os efeitos dos ataques GX do seu oponente, incluindo dano, causados aos seus Pokémon.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere alle Effekte von GX-Attacken deines Gegners, einschließlich Schaden, die diesem Pokémon zugefügt werden."
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
				en: "Power Cyclone",
				fr: "Cyclone d’Énergie",
				es: "Ciclón Poderoso",
				it: "Ciclone Potente",
				pt: "Ciclone Poderoso",
				de: "Kraftwirbel"
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 110,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Discovery GX",
				fr: "Découverte GX",
				es: "Descubrimiento GX",
				it: "Scoperta GX",
				pt: "Descoberta GX",
				de: "Aufdeckung GX"
			},
			effect: {
				en: "Count your Prize cards and put them into your hand. Then, take that many cards from the top of your deck and put them face down as your Prize cards. If you don’t have that many cards in your deck, this attack does nothing. (You can’t use more than 1 GX attack in a game.)",
				fr: "Comptez vos cartes Récompense, puis ajoutez-les à votre main. Prenez alors ce nombre de cartes du dessus de votre deck et placez-les faces cachées comme cartes Récompense. Si vous n’avez pas assez de cartes dans votre deck, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cuenta tus cartas de Premio y ponlas en tu mano. Después, coge la misma cantidad de cartas de la parte superior de tu baraja y ponlas boca abajo como tus cartas de Premio. Si no tienes esa cantidad de cartas en tu baraja, este ataque no hace nada. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Conta le tue carte Premio e aggiungile alle carte che hai in mano. Poi prendi lo stesso numero di carte in cima al tuo mazzo e mettile a faccia in giù come carte Premio. Se non hai lo stesso numero di carte nel tuo mazzo, questo attacco non ha effetto. Non puoi usare più di un attacco GX a partita.",
				pt: "Conte as suas cartas de Prêmio e coloque-as na sua mão. Em seguida, pegue aquele mesmo número de cartas de cima do seu baralho e coloque-as viradas para baixo como as suas cartas de Prêmio. Se você não tiver aquele mesmo número de cartas no seu baralho, este ataque não fará nada (você não pode usar mais de 1 ataque GX por partida).",
				de: "Zähle deine Preiskarten und nimm sie auf deine Hand. Nimm anschließend genauso viele Karten von deinem Deck und lege sie als deine verdeckten Preiskarten ab. Wenn du weniger Karten in deinem Deck hast, hat diese Attacke keine Auswirkungen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
