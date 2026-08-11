import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [591],
	set: Set,

	name: {
		'fr-fr': "Gaulet",
		'en-us': "Amoonguss",
		'es-es': "Amoonguss",
		'it-it': "Amoonguss",
		'pt-br': "Amoonguss",
		'de-de': "Hutsassa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Trompignon",
		'en-us': "Foongus",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Spores Dangereuses",
			'en-us': "Dangerous Spores",
			'es-es': "Esporas Peligrosas",
			'it-it': "Spore Pericolose",
			'pt-br': "Esporos Perigosos",
			'de-de': "Gefährliche Sporen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Envenenado e Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Be wary of the poisonous spores it releases. Mushrooms resembling Amoonguss's caps will grow out of anywhere the spores touch.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725090,
				tcgplayer: 509700,
				cardtrader: 255570
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725090,
				tcgplayer: 509700,
				cardtrader: 255570
			}
		},
	],

	illustrator: "Nobuhiro Imagawa",

	
}

export default card
