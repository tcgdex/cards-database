import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'de-de': "Shaymin",
		'it-it': "Shaymin",
		'es-es': "Shaymin",
		'pt-br': "Shaymin",
		'es-mx': "Shaymin"
	},

	illustrator: "tono",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flower Curtain",
			'fr-fr': "Rideau de Fleurs",
			'de-de': "Blumenschleier",
			'it-it': "Cortina Floreale",
			'es-es': "Cortina Floral",
			'pt-br': "Cortina de Flores",
			'es-mx': "Cortina Floral"
		},

		effect: {
			'en-us': "Prevent all damage done to your Benched Pokémon that don't have a Rule Box by attacks from your opponent's Pokémon. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
			'fr-fr': "Évitez tous les dégâts infligés à vos Pokémon de Banc sans encadré Règle par les attaques des Pokémon de votre adversaire. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
			'de-de': "Verhindere allen Schaden, der den Pokémon auf deiner Bank, die kein Regelfeld haben, durch Attacken von Pokémon deines Gegners zugefügt wird. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)",
			'it-it': "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina che non hanno una regola speciale dagli attacchi dei Pokémon del tuo avversario. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
			'es-es': "Se evita todo el daño infligido a tus Pokémon en Banca que no tengan un recuadro de regla por ataques de los Pokémon de tu rival. (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
			'pt-br': "Previna todo o dano causado aos seus Pokémon no Banco que não têm uma Caixa de Regras por ataques dos Pokémon do seu oponente. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
			'es-mx': "Se evita todo el daño infligido por ataques de los Pokémon de tu rival a tus Pokémon en Banca que no tengan un recuadro de regla. (Los Pokémon ex, los Pokémon V, etc., tienen recuadros de regla)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'de-de': "Schmetterkick",
			'it-it': "Calcio Esplosivo",
			'es-es': "Patada Destrucción",
			'pt-br': "Chute Poderoso",
			'es-mx': "Patada Devastadora"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825884,
				tcgplayer: 632836
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825884,
				tcgplayer: 632836
			}
		},
	],
}

export default card
