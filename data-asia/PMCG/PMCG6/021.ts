import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Nidoking",
         ja: "ジョヴァンニのニドキング",
         fr: "Nidoking de Giovanni",
         de: "Giovannis Nidoking",
         es: "Giovanni es Nidoking",
         it: "Giovanni's Nidoking",
         pt: "Giovanni's Nidoking",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [34],
      hp: 120,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Intimidate",
            ja: "威圧します",
            fr: "Intimider",
            de: "Einschüchtern",
            es: "Intimidar",
            it: "Intimidire",
            pt: "Intimidar",
          },
          effect: {
            en: "If the Defending Pokemon's maximum HP is 50 or less, it can't attack Giovanni's Nidoking during your opponent's next turn. (Benching or evolving either Pokemon ends this effect.)",
            ja: "ディフェンディングポケモンの最大HPが50以下の場合、相手の次のターン中にジョバンニの気分を害することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
            fr: "Si le HP maximum de Pokémon en défense est de 50 ans ou moins, il ne peut pas attaquer Nidoking de Giovanni pendant le prochain tour de votre adversaire. (Benching ou évolution de Pokémon termine cet effet.)",
            de: "Wenn der maximale HP des Verteidigers Pokemon 50 oder weniger beträgt, kann es Giovannis Nidoking während der nächsten Runde Ihres Gegners nicht angreifen. (BENCHING oder EVOLING ENDERUNG POKEMON beendet diesen Effekt.)",
            es: "Si el HP máximo del Pokémon defensor es de 50 o menos, no puede atacar a Giovanni a NiCoking durante el próximo turno de tu oponente. (Benching o evolucionando o Pokémon termina este efecto).",
            it: "Se il massimo HP di difensore di Pokemon è di 50 o meno, non può attaccare il nidoking di Giovanni durante il prossimo turno del tuo avversario. (Panca o evolvendo Pokemon termina questo effetto.)",
            pt: "Se o HP máximo de Pokemon atual for 50 ou menos, ele não poderá atacar o Nidoking de Giovanni durante o próximo turno do seu oponente. (Bancho ou evolução de Pokemon termina esse efeito.)",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass", "Colorless"],
          name: {
            en: "Tumbling Attack",
            ja: "タンブリング攻撃",
            fr: "Attaque tumultueuse",
            de: "Sturzangriff",
            es: "Atacante",
            it: "Attacco di caduta",
            pt: "Ataque de queda",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage; if tails, this attack does 40 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて30ダメージを与えます。尾の場合、この攻撃は40ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires; Si Tails, cette attaque fait 40 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 40 Schäden plus 30 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 40 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 30 más de daño; Si Tails, este ataque hace 40 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 30 danni in più; Se le code, questo attacco infligge 40 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 30 mais danos; Se caudas, esse ataque causa 40 danos.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
