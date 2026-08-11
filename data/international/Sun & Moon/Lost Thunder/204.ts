import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Genesect GX",
		'fr-fr': "Genesect GX",
		'es-es': "Genesect GX",
		'it-it': "Genesect GX",
		'pt-br': "Genesect GX",
		'de-de': "Genesect GX"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		649,
	],

	hp: 180,

	types: [
		"Metal",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Double Drive",
				'fr-fr': "Double Module",
				'es-es': "Doble ROM",
				'it-it': "Doppio Modulo",
				'pt-br': "Disco Duplo",
				'de-de': "Doppelantrieb"
			},
			effect: {
				'en-us': "This Pokémon may have up to 2 Pokémon Tool cards attached to it. If it loses this Ability, discard Pokémon Tool cards from it until only 1 remains.",
				'fr-fr': "Jusqu’à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon. S’il perd ce talent, défaussez-en des cartes Outil Pokémon jusqu’à ce qu’il n’en reste qu’une.",
				'es-es': "Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él. Si pierde esta habilidad, descarta cartas de Herramienta Pokémon de él hasta que solo quede 1.",
				'it-it': "Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
				'pt-br': "Este Pokémon pode ter até 2 cartas de Ferramenta Pokémon ligadas a ele. Se ele perder esta Habilidade, descarte cartas de Ferramenta Pokémon dele até restar apenas 1.",
				'de-de': "An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lang Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Burst Shot",
				'fr-fr': "Tir en Rafale",
				'es-es': "Disparo Explosivo",
				'it-it': "Colpo Esplosivo",
				'pt-br': "Disparo Explosivo",
				'de-de': "Salve"
			},

			damage: 130,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Break Buster GX",
				'fr-fr': "Éclat Brisé GX",
				'es-es': "Quiebre Destructor GX",
				'it-it': "Sfondamento Difese-GX",
				'pt-br': "Destruidor Explosivo GX",
				'de-de': "Knacker GX"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O dano deste ataque não é afetado por Resistência (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365837,
		tcgplayer: 178946
	}
}

export default card
