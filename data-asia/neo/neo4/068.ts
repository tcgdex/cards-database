import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Mewtwo",
         ja: "輝くミュウツー",
         fr: "Brillant mewtwo",
         de: "Leuchten Sie Mewtwo",
         es: "Brillante mewtwo",
         it: "Shining Mewtwo",
         pt: "Brilhando mewtwo",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [150],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Lightning"],
          name: {
            en: "Reflect Shield",
            ja: "シールドを反映します",
            fr: "Refléter le bouclier",
            de: "Schild reflektieren",
            es: "Reflejar escudo",
            it: "Riflettere lo scudo",
            pt: "Refletir escudo",
          },
          effect: {
            en: "If an attack does damage to Shining Mewtwo during your opponent's next turn (even if Shining Mewtwo is Knocked Out), flip a coin. If heads, prevent all damage done to Shining Mewtwo from that attack (any other effects of attacks still happen) and do 20 damage to the attacking Pokemon.",
            ja: "攻撃が対戦相手の次のターン中に輝くMewtwoにダメージを与えた場合（輝くMewtwoがノックアウトされたとしても）、コインをひっくり返します。頭の場合、その攻撃からMewtwoを輝かせるためにすべてのダメージを防ぎ（攻撃の他の効果はまだ発生します）、攻撃ポケモンに20のダメージを与えます。",
            fr: "Si une attaque endommage le Mewtwo brillant lors du prochain tour de votre adversaire (même si brillant Mewtwo est éliminé), retournez une pièce. Si les têtes, empêchent tous les dégâts causés pour briller Mewtwo de cette attaque (tous les autres effets des attaques se produisent toujours) et font 20 dégâts au Pokémon attaquant.",
            de: "Wenn ein Angriff in der nächsten Runde Ihres Gegners Schaden zufügt (auch wenn der glänzende Mewtwo ausgeschaltet wird), drehen Sie eine Münze um. Wenn Sie Köpfe sind, verhindern Sie alle Schäden, die MiEwtwo von diesem Angriff zu lenken (noch andere Auswirkungen von Angriffen), und verursachen Sie das angreifende Pokémon 20 Schäden.",
            es: "Si un ataque da daño a que brilla mewtwo durante el próximo turno de tu oponente (incluso si brillante mewtwo es noqueado), voltea una moneda. Si se dirige, evite todo el daño causado a Mewtwo brillante de ese ataque (cualquier otro efecto de los ataques aún ocurren) y haga 20 daños al Pokémon atacante.",
            it: "Se un attacco fa danni a Shining Mewtwo durante il prossimo turno del tuo avversario (anche se Shining Mewtwo viene eliminato), capovolgi una moneta. Se le teste, impediscono a tutti i danni fatti per splendente Mewtwo da quell'attacco (qualsiasi altro effetto degli attacchi si verifica ancora) e fare 20 danni al Pokemon attaccante.",
            pt: "Se um ataque causar danos a mewtwo brilhando durante o próximo turno do seu oponente (mesmo que mewtwo brilha seja nocauteado), vire uma moeda. Se as cabeças, impedem que todos os danos causados por mewtwo brilhantes desse ataque (quaisquer outros efeitos dos ataques ainda ocorram) e causar 20 danos ao Pokémon atacante.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Fire"],
          name: {
            en: "Psyburst",
            ja: "Psyburst",
            fr: "Psychure",
            de: "Psyburst",
            es: "Psíquico",
            it: "Psyburst",
            pt: "Psyburst",
          },
          effect: {
            en: "Discard a Fire Energy card attached to Shining Mewtwo or this attack does nothing. This attack does 40 damage plus 10 damage for each Energy attached to the Defending Pokemon.",
            ja: "Shining Mewtwoに取り付けられたFire Energyカードを廃棄するか、この攻撃は何もしません。この攻撃は、防御ポケモンに取り付けられた各エネルギーに対して40のダメージと10ダメージを与えます。",
            fr: "Jeter une carte d'énergie de feu attachée à un miwtwo brillant ou cette attaque ne fait rien. Cette attaque fait 40 dégâts plus 10 dégâts pour chaque énergie attachée au Pokémon en défense.",
            de: "Verwerfen Sie eine Brandenergiekarte, die mit glänzendem Mewtwo befestigt ist, oder dieser Angriff tut nichts. Dieser Angriff verursacht 40 Schäden plus 10 Schäden für jede an das verteidigende Pokémon angeschlossene Energie.",
            es: "Deseche una tarjeta de energía de fuego unida a Mewtwo brillante o este ataque no hace nada. Este ataque hace 40 daños más 10 daños por cada energía unida al Pokémon defensor.",
            it: "Scartare una carta di energia antincendio attaccata a Shining Mewtwo o questo attacco non fa nulla. Questo attacco infligge 40 danni più 10 danni per ogni energia attaccata al Pokemon in difesa.",
            pt: "Descarte um cartão de energia de incêndio ligado a mewtwo brilhante ou esse ataque não faz nada. Este ataque causa 40 danos mais 10 danos para cada energia ligada ao pokemon defensor.",
          },
        },
      ],

      retreat: 2,

};
