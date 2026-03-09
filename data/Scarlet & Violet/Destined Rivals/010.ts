import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin",
		it: "Shaymin",
		es: "Shaymin",
		pt: "Shaymin",
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
			en: "Flower Curtain",
			fr: "Rideau de Fleurs",
			de: "Blumenschleier",
			it: "Cortina Floreale",
			es: "Cortina Floral",
			pt: "Cortina de Flores",
			'es-mx': "Cortina Floral"
		},

		effect: {
			en: "Prevent all damage done to your Benched Pokémon that don't have a Rule Box by attacks from your opponent's Pokémon. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
			fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc sans encadré Règle par les attaques des Pokémon de votre adversaire. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
			de: "Verhindere allen Schaden, der den Pokémon auf deiner Bank, die kein Regelfeld haben, durch Attacken von Pokémon deines Gegners zugefügt wird. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)",
			it: "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina che non hanno una regola speciale dagli attacchi dei Pokémon del tuo avversario. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
			es: "Se evita todo el daño infligido a tus Pokémon en Banca que no tengan un recuadro de regla por ataques de los Pokémon de tu rival. (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
			pt: "Previna todo o dano causado aos seus Pokémon no Banco que não têm uma Caixa de Regras por ataques dos Pokémon do seu oponente. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
			'es-mx': "Se evita todo el daño infligido por ataques de los Pokémon de tu rival a tus Pokémon en Banca que no tengan un recuadro de regla. (Los Pokémon ex, los Pokémon V, etc., tienen recuadros de regla)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			de: "Schmetterkick",
			it: "Calcio Esplosivo",
			es: "Patada Destrucción",
			pt: "Chute Poderoso",
			'es-mx': "Patada Devastadora"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825884
	}
}

export default card
