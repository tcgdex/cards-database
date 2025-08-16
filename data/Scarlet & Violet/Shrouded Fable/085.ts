import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [1025],
	set: Set,

	name: {
		en: "Pecharunt ex",
		fr: "Pêchaminus-ex",
		es: "Pecharunt ex",
		it: "Pecharunt-ex",
		pt: "Pecharunt ex",
		de: "Infamomo-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Subjugating Chains",
			fr: "Chaînes Emprise",
			es: "Cadenas Controladoras",
			it: "Catene Dominanti",
			pt: "Correntes da Submissão",
			de: "Knechtende Ketten"
		},

		effect: {
			en: "Once during your turn, you may switch 1 of your Benched {D} Pokémon, except any Pecharunt ex, with your Active Pokémon. If you do, the new Active Pokémon is now Poisoned. You can't use more than 1 Subjugating Chains Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez échanger l'un de vos Pokémon {D} de Banc, à l'exception de Pêchaminus-ex, contre votre Pokémon Actif. Dans ce cas, le nouveau Pokémon Actif est maintenant Empoisonné. Vous ne pouvez utiliser qu'un talent Chaînes Emprise par tour.",
			es: "Una vez durante tu turno, puedes cambiar 1 de tus Pokémon {D} en Banca, excepto Pecharunt ex, por tu Pokémon Activo. Si lo haces, el nuevo Pokémon Activo pasa a estar Envenenado. No puedes usar más de una habilidad Cadenas Controladoras en cada turno.",
			it: "Una sola volta durante il tuo turno, puoi scambiare uno dei tuoi Pokémon {D} in panchina, a eccezione di qualsiasi Pecharunt-ex, con il tuo Pokémon attivo. Se lo fai, il nuovo Pokémon attivo viene avvelenato. Puoi usare l'abilità Catene Dominanti solo una volta per turno.",
			pt: "Uma vez durante o seu turno, você poderá trocar 1 dos seus Pokémon {D} no Banco, exceto por quaisquer Pecharunt ex, pelo seu Pokémon Ativo. Se fizer isto, o novo Pokémon Ativo agora estará Envenenado. Você não pode usar mais de 1 Habilidade Correntes da Submissão por turno.",
			de: "Einmal während deines Zuges kannst du 1 {D}-Pokémon auf deiner Bank, außer Infamomo-ex, gegen dein Aktives Pokémon austauschen. Wenn du das machst, ist das neue Aktive Pokémon jetzt vergiftet. Du kannst die Fähigkeit Knechtende Ketten nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Irritated Outburst",
			fr: "Emportement Agacé",
			es: "Estallido de Rabia",
			it: "Irritascoppio",
			pt: "Chilique",
			de: "Erboster Ausraster"
		},

		effect: {
			en: "This attack does 60 damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 60 dégâts pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 60 puntos de daño por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 60 danni per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 60 pontos de dano para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "aky CG Works",

	thirdParty: {
		cardmarket: 780934
	}
}

export default card
