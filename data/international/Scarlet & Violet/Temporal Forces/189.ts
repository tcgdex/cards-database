import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1009],
	set: Set,

	name: {
		'en-us': "Walking Wake ex",
		'fr-fr': "Serpente-Eau-ex",
		'es-es': "Ondulagua ex",
		'it-it': "Acquecrespe-ex",
		'pt-br': "Onda Ando ex",
		'de-de': "Windewoge-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Azure Seas",
			'fr-fr': "Mers Azur",
			'es-es': "Mares Cerúleos",
			'it-it': "Mari Azzurri",
			'pt-br': "Mares Celestes",
			'de-de': "Azurmeer"
		},

		effect: {
			'en-us': "Damage from attacks used by this Pokémon isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts des attaques utilisées par ce Pokémon ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de los ataques usados por este Pokémon no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni degli attacchi usati da questo Pokémon non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano dos ataques usados por este Pokémon não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Schaden durch von diesem Pokémon eingesetzte Attacken wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Catharsis Roar",
			'fr-fr': "Rugissement Cathartique",
			'es-es': "Rugido Catártico",
			'it-it': "Ruggito Catartico",
			'pt-br': "Rugido Catarse",
			'de-de': "Katharsis-Gebrüll"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760819,
				tcgplayer: 542910
			}
		},
	],

	suffix: "ex",
	illustrator: "takuyoa",

}

export default card