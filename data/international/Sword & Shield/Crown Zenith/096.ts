import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Zacian VSTAR",
		'fr-fr': "Zacian VSTAR",
		'es-es': "Zacian V-ASTRO",
		'it-it': "Zacian V ASTRO",
		'pt-br': "Zacian V-ASTRO",
		'de-de': "Zacian VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Zacian V",
		'fr-fr': "Zacian-V",
		'es-es': "Zacian V",
		'it-it': "Zacian-V",
		'pt-br': "Zacian V",
		'de-de': "Zacian-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Break Edge",
			'fr-fr': "Brise-Lame",
			'es-es': "Filo Rompedor",
			'it-it': "Frangilama",
			'pt-br': "Gume Destruidor",
			'de-de': "Brechklinge"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 200
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Sword Star",
			'fr-fr': "Star Épée",
			'es-es': "Astro Espada",
			'it-it': "Astro Spada",
			'pt-br': "Espada Astral",
			'de-de': "Schwertstern"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: 310
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691815,
				tcgplayer: 477469
			}
		},
	],
}

export default card
