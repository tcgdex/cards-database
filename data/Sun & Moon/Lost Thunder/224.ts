import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Genesect GX",
		fr: "Genesect GX",
		es: "Genesect GX",
		it: "Genesect GX",
		pt: "Genesect GX",
		de: "Genesect GX"
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
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
				en: "Double Drive",
				fr: "Double Module",
				es: "Doble ROM",
				it: "Doppio Modulo",
				pt: "Disco Duplo",
				de: "Doppelantrieb"
			},
			effect: {
				en: "This Pokémon may have up to 2 Pokémon Tool cards attached to it. If it loses this Ability, discard Pokémon Tool cards from it until only 1 remains.",
				fr: "Jusqu’à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon. S’il perd ce talent, défaussez-en des cartes Outil Pokémon jusqu’à ce qu’il n’en reste qu’une.",
				es: "Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él. Si pierde esta habilidad, descarta cartas de Herramienta Pokémon de él hasta que solo quede 1.",
				it: "Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
				pt: "Este Pokémon pode ter até 2 cartas de Ferramenta Pokémon ligadas a ele. Se ele perder esta Habilidade, descarte cartas de Ferramenta Pokémon dele até restar apenas 1.",
				de: "An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lang Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
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
				en: "Burst Shot",
				fr: "Tir en Rafale",
				es: "Disparo Explosivo",
				it: "Colpo Esplosivo",
				pt: "Disparo Explosivo",
				de: "Salve"
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
				en: "Break Buster GX",
				fr: "Éclat Brisé GX",
				es: "Quiebre Destructor GX",
				it: "Sfondamento Difese-GX",
				pt: "Destruidor Explosivo GX",
				de: "Knacker GX"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance. (You can’t use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El daño de este ataque no se ve afectado por Resistencia. (No puedes usar más de 1 ataque GX en una partida).",
				it: "I danni di questo attacco non sono influenzati dalla resistenza. Non puoi usare più di un attacco GX a partita.",
				pt: "O dano deste ataque não é afetado por Resistência (você não pode usar mais de 1 ataque GX por partida).",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
