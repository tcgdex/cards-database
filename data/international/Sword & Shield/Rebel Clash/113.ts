import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galarian Weezing",
		'fr-fr': "Smogogo de Galar",
		'es-es': "Weezing de Galar",
		'it-it': "Weezing di Galar",
		'pt-br': "Weezing de Galar",
		'de-de': "Galar-Smogmog"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [110],
	set: Set,

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'de-de': "Smogon"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Neutralizing Gas",
				'fr-fr': "Gaz Inhibiteur",
				'es-es': "Gas Reactivo",
				'it-it': "Gas Reagente",
				'pt-br': "Gás Neutralizador",
				'de-de': "Reaktionsgas"
			},
			effect: {
				'en-us': "As long as this Pokémon is in the Active Spot, your opponent's Pokémon in play have no Abilities, except for Neutralizing Gas.",
				'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire n'ont pas de talent, à l'exception de Gaz Inhibiteur.",
				'es-es': "Mientras este Pokémon esté en el Puesto Activo, los Pokémon en juego de tu rival no tienen ninguna habilidad, excepto Gas Reactivo.",
				'it-it': "Fintanto che questo Pokémon è in posizione attiva, i Pokémon in gioco del tuo avversario non hanno abilità, a eccezione di Gas Reagente.",
				'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, os Pokémon em jogo do seu oponente não têm Habilidades, exceto por Gás Neutralizador.",
				'de-de': "Solange dieses Pokémon in der Aktiven Position ist, haben die Pokémon deines Gegners im Spiel keine Fähigkeiten, außer Reaktionsgas."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Severe Poison",
				'fr-fr': "Poison Violent",
				'es-es': "Veneno Grave",
				'it-it': "Maloveleno",
				'pt-br': "Veneno Forte",
				'de-de': "Pures Gift"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon during Pokémon Checkup.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur ce Pokémon-là pendant le Contrôle Pokémon.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 4 contadores de daño en vez de 1 en ese Pokémon durante el Chequeo Pokémon.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Metti quattro segnalini danno invece di uno su quel Pokémon durante il controllo Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 4 contadores de dano ao invés de 1 naquele Pokémon durante o Checape Pokémon.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege beim Pokémon-Check 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 130,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "This Pokémon consumes particles that contaminate the air. Instead of leaving droppings, it expels clean air."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457973,
				tcgplayer: 213205
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457973,
				tcgplayer: 213205
			}
		},
	],
}

export default card
