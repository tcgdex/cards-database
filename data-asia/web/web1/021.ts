import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Weezing",
         ja: "暗いweezing",
         fr: "Weezing sombre",
         de: "Dunkler Weezing",
         es: "Weezing oscuro",
         it: "Dark Weezing",
         pt: "Weezing escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [110],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Mass Explosion",
            ja: "大量爆発",
            fr: "Explosion de masse",
            de: "Massenexplosion",
            es: "Explosión masiva",
            it: "Esplosione di massa",
            pt: "Explosão em massa",
          },
          effect: {
            en: "Does 20 damage times the total number of Koffings, Weezings, and Dark Weezings in play (Apply Weakness and Resistance.). Then, this attack does 20 damage to each Koffing, Weezing, and Dark Weezing (even your own). Don't apply Weakness and Resistance.",
            ja: "20回のダメージ時間、コッフィング、ウィージング、およびプレイ中の暗いweezingsの総数が発生します（脱力感と抵抗を適用します。）。その後、この攻撃は、各コッフィング、ウィージング、そして暗いweezing（あなた自身でさえ）に20のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Fait 20 dégâts de temps le nombre total de Koffings, de Weezings et de Weezings sombres en jeu (appliquez une faiblesse et une résistance.). Ensuite, cette attaque fait 20 dégâts à chaque Koffing, Weezing et Dark Weezing (même le vôtre). N'appliquez pas la faiblesse et la résistance.",
            de: "Hat 20 Schadenszeiten die Gesamtzahl der Koffings, Weezings und dunklen Weezings im Spiel (aufträgen Schwäche und Widerstand). Dann schädigt dieser Angriff 20 Schäden an jedem Koffing, Weezing und Dark Weezing (sogar Ihrem eigenen). Wenden Sie keine Schwäche und Widerstand an.",
            es: "Hace 20 veces el número total de koffings, weezings y weezings oscuros en juego (aplique debilidad y resistencia). Luego, este ataque hace 20 daños a cada koffing, weezing y weezing oscuro (incluso el tuyo). No aplique debilidad y resistencia.",
            it: "Fa 20 volte il numero totale di koffings, weezings e scuro weezings in gioco (applicare debolezza e resistenza.). Quindi, questo attacco infligge 20 danni ad ogni koffing, weezing e scuro weezing (anche il tuo). Non applicare debolezza e resistenza.",
            pt: "Faz 20 danos vezes o número total de koffings, lenços e pequenos alimentos escuros em jogo (aplique fraqueza e resistência.). Então, esse ataque causa 20 de dano a cada koffing, pequenino e escuro (até o seu). Não aplique fraqueza e resistência.",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Stun Gas",
            ja: "スタンガス",
            fr: "Étourdir l'essence",
            de: "Betäubungsgas",
            es: "Gas aturdido",
            it: "Gas stordente",
            pt: "Gás de atordoamento",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned; if tails, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは現在毒されています。尾の場合、防御するポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné; Si Tails, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet; Wenn Schwänze, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado; Si cola, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato; Se le code, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual está agora envenenado; Se as caudas, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
