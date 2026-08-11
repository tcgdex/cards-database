import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [871],
	set: Set,

	name: {
		'fr-fr': "Wattapik",
		'en-us': "Pincurchin",
		'es-es': "Pincurchin",
		'it-it': "Pincurchin",
		'pt-br': "Pincurchin",
		'de-de': "Britzigel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Para-Dard",
			'en-us': "Stun Needle",
			'es-es': "Aguja Paralizante",
			'it-it': "Ago Paralizzante",
			'pt-br': "Agulha Estonteante",
			'de-de': "Betäubungsnadel"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}, {
		cost: ["Lightning"],

		name: {
			'fr-fr': "Zap de Relance",
			'en-us': "Follow-Up Kerzap",
			'es-es': "Seguimiento Zap",
			'it-it': "Proseguimento Kerzap",
			'pt-br': "Continuidade Chocante",
			'de-de': "Anschluss-Kerzap"
		},

		effect: {
			'fr-fr': "Vous ne pouvez utiliser cette attaque que si ce Pokémon a utilisé Para-Dard pendant votre dernier tour.",
			'en-us': "You can use this attack only if this Pokémon used Stun Needle during your last turn.",
			'es-es': "Puedes usar este ataque solo si este Pokémon usó Aguja Paralizante durante tu último turno.",
			'it-it': "Puoi usare questo attacco solo se questo Pokémon ha usato Ago Paralizzante durante il tuo ultimo turno.",
			'pt-br': "Você só pode usar este ataque se este Pokémon usou Agulha Estonteante durante o seu último turno.",
			'de-de': "Du kannst diese Attacke nur einsetzen, wenn dieses Pokémon während deines letzten Zuges Betäubungsnadel eingesetzt hat."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715548,
				tcgplayer: 497484,
				cardtrader: 248700
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715548,
				tcgplayer: 497484,
				cardtrader: 248700
			}
		},
	],

	illustrator: "miki kudo",

	description: {
		'en-us': "This Pokémon generates electricity when it digests food. It uses its five hard teeth to scrape seaweed off surfaces and eat it.",
	},
}

export default card
