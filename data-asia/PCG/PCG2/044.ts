import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Metagross",
         ja: "メタグロス",
         fr: "Métagross",
         de: "Metagross",
         es: "Metagross",
         it: "Metagross",
         pt: "Metagross",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [376],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Super Connectivity",
            ja: "スーパー接続",
            fr: "Super connectivité",
            de: "Superkonnektivität",
            es: "Super conectividad",
            it: "Super connettività",
            pt: "Super conectividade",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your discard pile for a Psychic or Metal Energy card and attach it to your Active PokÃ©mon. Then, put 1 damage counter on that PokÃ©mon. This power can't be used if Metagross is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）、廃棄物の山を検索して、サイキックまたはメタルのエネルギーカードを検索し、アクティブなPokã©Monに添付することができます。次に、そのpokã©Monに1つのダメージカウンターを置きます。 Metagrossが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher à votre dépassement une carte d'énergie psychique ou en métal et la fixer à votre pokã © mon actif. Ensuite, mettez 1 compteur de dégâts sur ce pokã © lun. Cette puissance ne peut pas être utilisée si le métagross est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihren Entwurfshaufen nach einer psychischen oder Metall -Energiekarte durchsuchen und an Ihrem aktiven Poké mon anbringen. Legen Sie dann 1 Schadenschalter auf diesen Poké © Mon. Diese Leistung kann nicht angewendet werden, wenn Metagross von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su pila de descarte en busca de una tarjeta de energía psíquica o de metal y adjuntarla a su Poké activo. Luego, ponga 1 contador de daño en ese Poké Mon. Esta potencia no se puede usar si Metagross se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nella pila di scarto per una carta di energia psichica o metallica e attaccarla al tuo poké attivo. Quindi, metti 1 contatore di danni su quel poké mon. Questa potenza non può essere utilizzata se MetaGross è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar sua pilha de descarte por um cartão de energia psíquica ou metal e conectá -lo ao seu Poké de Mon ativo. Em seguida, coloque 1 contador de danos naquele Poké MON. Esse poder não pode ser usado se o Metagross for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Link Blast",
            ja: "リンクブラスト",
            fr: "Blast de lien",
            de: "Link Explosion",
            es: "Explosión de enlace",
            it: "Blast di collegamento",
            pt: "Link Blast",
          },
          effect: {
            en: "If Metagross and the Defending Pokemon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70.",
            ja: "Metagrossと防御ポケモンのエネルギーが異なるエネルギーを持っている場合、この攻撃のベースダメージは70ではなく40です。",
            fr: "Si Metagross et le Pokémon en défense ont une quantité d'énergie différente qui leur est attachée, les dégâts de base de cette attaque sont de 40 au lieu de 70.",
            de: "Wenn Metagross und das verteidigende Pokémon eine andere Menge an Energie haben, beträgt der Grundschaden dieses Angriffs 40 anstelle von 70.",
            es: "Si Metagross y el Pokémon defensor tienen una cantidad diferente de energía unida a ellos, el daño base de este ataque es 40 en lugar de 70.",
            it: "Se MetaGross e i Pokemon in carica hanno una diversa quantità di energia collegata ad essi, il danno di base di questo attacco è 40 anziché 70.",
            pt: "Se o Metagross e o Pokémon defensivo tiverem uma quantidade diferente de energia anexada a eles, o dano básico desse ataque será 40 em vez de 70.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

      variants: [
		  {
			  type: "holo"
		  },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
