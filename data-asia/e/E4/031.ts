import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Politoed - 031/088",
         ja: "政治-031/088",
         fr: "Politoed - 031/088",
         de: "Politoed - 031/088",
         es: "Politoed - 031/088",
         it: "Politoed - 031/088",
         pt: "Polito - 031/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [186],
      hp: 110,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sudden Growth",
            ja: "突然の成長",
            fr: "Croissance soudaine",
            de: "Plötzliches Wachstum",
            es: "Crecimiento repentino",
            it: "Crescita improvvisa",
            pt: "Crescimento repentino",
          },
          effect: {
            en: "Attach any number of basic Energy cards from your hand to Politoed.",
            ja: "あなたの手から政治に任意の数の基本的なエネルギーカードを添付してください。",
            fr: "Attachez un certain nombre de cartes d'énergie de base de votre main à Politoed.",
            de: "Fügen Sie eine beliebige Anzahl grundlegender Energiekarten von Ihrer Hand an Politoed hinzu.",
            es: "Adjunte cualquier cantidad de tarjetas de energía básicas de su mano a Politoed.",
            it: "Allega qualsiasi numero di carte di energia di base dalla tua mano a Politoed.",
            pt: "Anexe qualquer número de cartões básicos de energia da sua mão a politicamente.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Frog Hop",
            ja: "カエルホップ",
            fr: "Grenouille",
            de: "Frosch Hop",
            es: "Salto de rana",
            it: "Rana hop",
            pt: "Sapo hop",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Energy Splash",
            ja: "エネルギースプラッシュ",
            fr: "Éclaboussures d'énergie",
            de: "Energiespritzer",
            es: "Salpicaduras de energía",
            it: "Splash di energia",
            pt: "Respingo de energia",
          },
          effect: {
            en: "Move 2 Water Energy cards attached to Politoed to 1 or 2 of your Benched Pokemon. (You may put both on the same Pokemon or 1 each on 2 different Pokemon.) If you have no Benched Pokemon, ignore this effect.",
            ja: "ベンチ付きポケモンの1つまたは2つに政治的に取り付けられた2つの水エネルギーカードを移動します。 （同じポケモンまたはそれぞれ1つの両方を2つの異なるポケモンに置くことができます。）ベンチポケモンがない場合は、この効果を無視してください。",
            fr: "Déplacez 2 cartes d'énergie d'eau attachées à Politoed à 1 ou 2 de votre pokemon bancé. (Vous pouvez mettre les deux sur le même Pokémon ou 1 chacun sur 2 Pokémon différents.) Si vous n'avez pas de Pokémon banc, ignorez cet effet.",
            de: "Bewegen Sie 2 Wassersenergiekarten, die an Polito auf 1 oder 2 Ihres Bankpokémons befestigt sind. (Sie können beide auf das gleiche Pokémon oder 1 auf 2 verschiedene Pokémon aufnehmen.) Wenn Sie kein Bank -Pokémon haben, ignorieren Sie diesen Effekt.",
            es: "Mueva 2 tarjetas de energía de agua unidas a Politoed a 1 o 2 de su Pokémon de banca. (Puede poner ambos en el mismo Pokémon o 1 cada uno en 2 Pokémon diferentes). Si no tiene Pokémon de banca, ignore este efecto.",
            it: "Spostare 2 carte d'acqua di energia idrica attaccate a 1 o 2 del tuo Pokemon in panchina. (Puoi mettere sia sullo stesso Pokemon o 1 ciascuno su 2 Pokemon diversi.) Se non hai Pokemon in panchina, ignora questo effetto.",
            pt: "Mova 2 cartões de energia da água ligados a políticos a 1 ou 2 do seu Pokémon em banco. (Você pode colocar os mesmos Pokemon ou 1 cada um em 2 Pokémon diferentes.) Se você não tiver Pokemon com bancada, ignore esse efeito.",
          },
          damage: 70,
        },
      ],

      retreat: 2,

};
