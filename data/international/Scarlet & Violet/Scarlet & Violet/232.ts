import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [454],
	set: Set,

	name: {
		'en-us': "Toxicroak ex",
		'fr-fr': "Coatox-ex",
		'es-es': "Toxicroak ex",
		'it-it': "Toxicroak-ex",
		'pt-br': "Toxicroak ex",
		'de-de': "Toxiquak-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Nasty Plot",
			'fr-fr': "Machination",
			'es-es': "Maquinación",
			'it-it': "Congiura",
			'pt-br': "Trama Maldosa",
			'de-de': "Ränkeschmied"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Toxic Ripper",
			'fr-fr': "Étripage Toxique",
			'es-es': "Destrucción Tóxica",
			'it-it': "Squarciatossina",
			'pt-br': "Rasgo Tóxico",
			'de-de': "Giftiger Reißer"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 6 damage counters on that Pokémon instead of 1.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 6 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 6 contadores de daño en vez de uno en ese Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti sei segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 6 contadores de dano ao invés de 1 naquele Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 6 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "PLANETA Hiiragi",

	thirdParty: {
        cardmarket: 702528,
        tcgplayer: 490090
    }
}

export default card