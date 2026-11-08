import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [970],
	set: Set,

	name: {
		'fr-fr': "Floréclat",
		'en-us': "Glimmora",
		'es-es': "Glimmora",
		'it-it': "Glimmora",
		'pt-br': "Glimmora",
		'de-de': "Lumiflora"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Germéclat",
		'en-us': "Glimmet",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Cristal Brisant",
			'en-us': "Shattering Crystal",
			'es-es': "Cristal Demoledor",
			'it-it': "Cristallo Frangente",
			'pt-br': "Estilhaçar Cristalino",
			'de-de': "Zersplitternder Kristall"
		},

		effect: {
			'fr-fr': "Quand ce Pokémon est mis K.O., lancez une pièce. Si c'est face, votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			'en-us': "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't take any Prize cards for it.",
			'es-es': "Cuando este Pokémon queda Fuera de Combate, lanza 1 moneda. Si sale cara, tu rival no puede coger ninguna carta de Premio por ello.",
			'it-it': "Quando questo Pokémon viene messo KO, lancia una moneta. Se esce testa, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			'pt-br': "Quando este Pokémon for Nocauteado, jogue uma moeda. Se sair cara, seu oponente não poderá pegar cartas de Prêmio por isto.",
			'de-de': "Wenn dieses Pokémon kampfunfähig wird, wirf 1 Münze. Bei Kopf kann dein Gegner dafür keine Preiskarten nehmen."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Pétales Poison",
			'en-us': "Poison Petals",
			'es-es': "Pétalos Veneno",
			'it-it': "Petali Velenosi",
			'pt-br': "Pétalas Venenosas",
			'de-de': "Giftblüten"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 6 marqueurs de dégâts sur ce Pokémon-là au lieu d'un.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 6 damage counters on that Pokémon instead of 1.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el Chequeo Pokémon, pon 6 contadores de daño en vez de uno en ese Pokémon.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti sei segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o Checape Pokémon, coloque 6 contadores de dano ao invés de 1 naquele Pokémon.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 6 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715601,
				tcgplayer: 497542,
				cardtrader: 248773
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 785702
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715601,
				tcgplayer: 497542,
				cardtrader: 248773
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "When this Pokémon detects danger, it will open up its crystalline petals and fire beams from its conical body.",
	},
}

export default card
