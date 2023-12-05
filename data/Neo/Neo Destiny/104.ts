import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Heal Powder",
		fr: "Poudre soin",
		de: "Heilpuder"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, votre Pokémon Actif n'est plus Endormi, Confus, Paralysé ou Empoisonné, retirez 2 marqueurs de dégâts de votre Pokémon Actif. Si votre Pokémon Actif a moins de marqueurs de dégâts, retirez-les tous.",
		de: "Wirf eine Münze. Bei 'Kopf' schläft dein Aktives Pokémon nicht mehr und ist nicht länger verwirrt, gelähmt oder vergiftet. Entferne zwei Schadensmarken von deinem aktiven Pokémon. Hat es weniger als zwei Schadensmarken, entferne alle."
	}
}

export default card
