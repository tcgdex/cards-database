import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Eevee",
         ja: "Eevee",
         fr: "Eevee",
         de: "Eevee",
         es: "Eevee",
         it: "Eevee",
         pt: "Eevee",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [133],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Wag",
            ja: "テールワグ",
            fr: "Wag",
            de: "Schwanz Wag",
            es: "Critica",
            it: "Coda Wag",
            pt: "WAG de cauda",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't attack Eevee during your opponent's next turn. (Benching either Pokemon ends this effect.)",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中にイービーを攻撃することはできません。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas attaquer Eevee lors du prochain tour de votre adversaire. (Benching soit Pokémon termine cet effet.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, kann das verteidigende Pokemon Eevee während der nächsten Runde Ihres Gegners nicht angreifen. (BENCHING BEEDE POKEON ENDEN diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede atacar a Eevee durante el próximo turno de tu oponente. (Benching O Pokemon termina este efecto).",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in carica non può attaccare Eevee durante il prossimo turno del tuo avversario. (Benching uno dei pokemon termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon atual não pode atacar Eevee durante o próximo turno do seu oponente. (Becada de Pokemon termina esse efeito.)",
          },

        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
          },

        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
