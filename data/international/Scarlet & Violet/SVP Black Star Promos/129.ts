import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1025],
	set: Set,

	name: {
		'en-us': "Pecharunt",
		'fr-fr': "Pêchaminus",
		'es-es': "Pecharunt",
		'it-it': "Pecharunt",
		'pt-br': "Pecharunt",
		'de-de': "Infamomo"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Toxic Subjugation",
			'fr-fr': "Emprise Toxique",
			'es-es': "Controlador Tóxico",
			'it-it': "Dominio Tossico",
			'pt-br': "Subjugação Tóxica",
			'de-de': "Giftige Knechtung"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, put 5 more damage counters on your opponent's Poisoned Pokémon during Pokémon Checkup.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, placez 5 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire pendant le Contrôle Pokémon.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, pon 5 contadores de daño más en los Pokémon Envenenados de tu rival durante el Chequeo Pokémon.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, metti altri cinque segnalini danno sui Pokémon avvelenati del tuo avversario durante il controllo Pokémon.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, coloque 5 contadores de dano a mais nos Pokémon Envenenados do seu oponente durante o Checape Pokémon.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, lege beim Pokémon-Check 5 Schadensmarken mehr auf die vergifteten Pokémon deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Poison Chain",
			'fr-fr': "Chaîne Poison",
			'es-es': "Cadena Venenosa",
			'it-it': "Catena Velenosa",
			'pt-br': "Corrente Peçonhenta",
			'de-de': "Giftige Kette"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "nagimiso",
	description: {
		'en-us': "Its peach-shaped shell serves as storage for a potent poison. It makes poisonous mochi and serves them to people and Pokémon.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 770948,
				tcgplayer: 564137
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 770949,
				tcgplayer: 573720
			},
		}
	],
}

export default card
