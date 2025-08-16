import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Alakazam - 084/128",
         ja: "アラカザム-084/128",
         fr: "Alakazam - 084/128",
         de: "Alakazam - 084/128",
         es: "Alakazam - 084/128",
         it: "Alakazam - 084/128",
         pt: "Alakazam - 084/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [65],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Psymimic",
            ja: "PSYMIMIC",
            fr: "Psymimique",
            de: "Psymimisch",
            es: "Psímímico",
            it: "Psymimic",
            pt: "Psymimic",
          },
          effect: {
            en: "Once during your turn, instead of Alakazam's normal attack, you may choose 1 of your opponent's Pokmon's attacks. Alakazam copies that attack including its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. <em>(No matter what type that Pokmon is, Alakazam's type is still Psychic.) This power can't be used if Alakazam is affected by a Special Condition.</em>",
            ja: "ターン中に、アラカザムの通常の攻撃の代わりに、相手のポクモンの攻撃を1つ選択できます。 Alakazamは、エネルギーカードの廃棄など、その攻撃を使用するために必要なエネルギーコストなどの攻撃をコピーします。 <em>（Pokmonがどんなタイプであっても、Alakazamのタイプはまだ精神的です。）Alakazamが特別な状態の影響を受けた場合、この力は使用できません。</em>",
            fr: "Une fois pendant votre tour, au lieu de l'attaque normale d'Alakazam, vous pouvez choisir les attaques de Pokmon de votre adversaire. Alakazam copie qui attaque, y compris ses coûts énergétiques et tout ce qui est nécessaire pour utiliser cette attaque, comme le rejet des cartes d'énergie. <em> (Quel que soit le type de ce type Pokmon, le type d'Alakazam est toujours psychique.) Ce pouvoir ne peut pas être utilisé si Alakazam est affecté par une condition spéciale. </em>",
            de: "Einmal in Ihrem Zug, anstelle von Alakazams normalem Angriff, können Sie 1 der Angriffe Ihres Gegners Pokmon auswählen. Alakazam kopiert diesen Angriff, einschließlich der Energiekosten und alles andere, was erforderlich ist, um diesen Angriff zu verwenden, z. B. die Abwerfen von Energiekarten. <em> (Egal welcher Typ dieser Pokmon ist, Alakazams Typ ist immer noch psychisch.) Diese Kraft kann nicht verwendet werden, wenn Alakazam von einem besonderen Zustand betroffen ist. </em>",
            es: "Una vez durante tu turno, en lugar del ataque normal de Alakazam, puedes elegir 1 de los ataques de Pokmon de tu oponente. Alakazam copia que atacan, incluidos sus costos de energía y cualquier otra cosa que se requiera para usar ese ataque, como descartar cartas de energía. <em> (no importa qué tipo sea ese Pokmon, el tipo de Alakazam sigue siendo psíquico). Este poder no se puede usar si Alakazam se ve afectado por una condición especial. </em>",
            it: "Una volta durante il tuo turno, invece del normale attacco di Alakazam, puoi scegliere 1 degli attacchi di Pokmon del tuo avversario. Alakazam copia quell'attacco, inclusi i suoi costi energetici e qualsiasi altra cosa richiesta per utilizzare quell'attacco, come scartare le carte energetiche. <em> (indipendentemente dal tipo di Pokmon, il tipo di Alakazam è ancora psichico.) Questo potere non può essere usato se Alakazam è influenzato da una condizione speciale. </em>",
            pt: "Uma vez durante o seu turno, em vez do ataque normal de Alakazam, você pode escolher um dos ataques do seu oponente. Alakazam cópias que atacam, incluindo seus custos de energia e qualquer outra coisa necessária para usar esse ataque, como descartar cartões de energia. <em> (não importa que tipo esse Pokmon seja, o tipo de Alakazam ainda é psíquico.) Esse poder não pode ser usado se Alakazam for afetado por uma condição especial. </em>",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Syncroblast",
            ja: "シンクロブラスト",
            fr: "Syncroblaste",
            de: "Syncroblast",
            es: "Sincroblast",
            it: "Syncroblast",
            pt: "Syncroblast",
          },
          effect: {
            en: "If Alakazam and the Defending Pokemon don't have the same number of Energy cards attached to them, this attack's base damage is 20 instead of 80.",
            ja: "Alakazamと防御ポケモンに同じ数のエネルギーカードが添付されていない場合、この攻撃のベースダメージは80ではなく20です。",
            fr: "Si Alakazam et le Pokémon en défense n'ont pas le même nombre de cartes d'énergie qui leur sont attachées, les dégâts de base de cette attaque sont de 20 au lieu de 80.",
            de: "Wenn Alakazam und das verteidigende Pokemon nicht die gleiche Anzahl von Energiekarten mit sich haben, beträgt der Grundschaden dieses Angriffs 20 anstelle von 80.",
            es: "Si Alakazam y el Pokémon defensor no tienen la misma cantidad de cartas de energía unidas a ellas, el daño base de este ataque es 20 en lugar de 80.",
            it: "Se Alakazam e il Pokemon in carica non hanno lo stesso numero di carte di energia collegate ad esse, il danno di base di questo attacco è 20 anziché 80.",
            pt: "Se Alakazam e o Pokémon atual não tiverem o mesmo número de cartões de energia anexados a eles, o dano básico desse ataque é de 20 em vez de 80.",
          },
          damage: 80,
        },
      ],

      retreat: 2,

};
