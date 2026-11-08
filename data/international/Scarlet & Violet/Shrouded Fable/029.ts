import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'es-es': "Crobat",
		'it-it': "Crobat",
		'pt-br': "Crobat",
		'de-de': "Iksbat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shadowy Envoy",
			'fr-fr': "Émissaire de l'Ombre",
			'es-es': "Emisario Sombrío",
			'it-it': "Emissario Oscuro",
			'pt-br': "Enviado das Sombras",
			'de-de': "Bote des Schattens"
		},

		effect: {
			'en-us': "Once during your turn, if you played Janine's Secret Art from your hand this turn, you may draw cards until you have 8 cards in your hand.",
			'fr-fr': "Une fois pendant votre tour, si vous avez joué Art Secret de Jeannine de votre main pendant ce tour, vous pouvez piocher des cartes jusqu'à en avoir 8 en main.",
			'es-es': "Una vez durante tu turno, si has jugado Artes Secretas de Sachiko de tu mano durante este turno, puedes robar cartas hasta que tengas 8 cartas en tu mano.",
			'it-it': "Una sola volta durante il tuo turno, se hai giocato Arte Segreta di Nina dalla tua mano nel turno in corso, puoi pescare fino ad avere otto carte in mano.",
			'pt-br': "Uma vez durante o seu turno, se você jogou Dom Secreto da Janine da sua mão neste turno, você poderá comprar cartas até ter 8 cartas na sua mão.",
			'de-de': "Einmal während deines Zuges, wenn du Janinas Geheimkunst während dieses Zuges aus deiner Hand gespielt hast, kannst du so lange Karten ziehen, bis du 8 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Poison Fang",
			'fr-fr': "Crochet Venin",
			'es-es': "Colmillo Veneno",
			'it-it': "Velenodenti",
			'pt-br': "Presa Venenosa",
			'de-de': "Giftzahn"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 2 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 2 contadores de daño en vez de uno en ese Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti due segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 2 contadores de dano ao invés de 1 naquele Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 2 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "H",


	illustrator: "Nisota Niso",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780924,
				tcgplayer: 560339
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780924,
				tcgplayer: 560339
			}
		},
	],
}

export default card
